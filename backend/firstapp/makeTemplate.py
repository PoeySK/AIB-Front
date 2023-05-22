import math
import numpy as np

from .views import *
from collections import Counter
from PIL import Image, ImageDraw, ImageFont

def textOnImage(before_img, texts, size, required_purposes, direction):
    # Parsing width and height from size
    width, height = map(int, size.split(':'))

    # Calling the function to get templates and textboxes
    textboxes_for_templates, valid_template_ids, closest_size = get_templates_and_textboxes(size, required_purposes)

    # If there are no valid templates, return immediately
    if not valid_template_ids:
        print('No valid templates found.')
        return

    # Create images for each valid template
    for template_id in valid_template_ids:
        # Corresponding textboxes for the current template
        textboxes = textboxes_for_templates[template_id]

        # Get positions and font sizes for each textbox
        positions = []
        font_sizes = []
        alignments = []
        for textbox in textboxes:
            position, font_size = template(width, height, textbox.position, textbox.font_size, closest_size, direction)
            positions.append(position)
            font_sizes.append(font_size)
            alignments.append(textbox.width_sort)

        image = before_img
        draw  = ImageDraw.Draw(image)

        # Font settings
        font_path = 'Hancom_Gothic_Bold.ttf'
        kerning = [2.9696 - 1.5565 *np.log(x) for x in font_sizes]

        # Text drawing
        for i in range(len(texts)):
            font = ImageFont.truetype(font_path, font_sizes[i])
            (x, y) = positions[i]
            alignment = alignments[i]
            lines = texts[i].split('n')
            for line in lines:
                x_start = x
                # Different handling based on the alignment
                if alignment == "left":
                    for char in line:
                        draw.text((x, y), char, font=font, fill=(0, 0, 0))
                        x += font.getsize(char)[0] + kerning[i]
                elif alignment == "right":
                    for char in reversed(line):
                        x -= font.getsize(char)[0] + kerning[i]
                        draw.text((x, y), char, font=font, fill=(0, 0, 0))
                elif alignment == "center":
                    line_width = sum(font.getsize(char)[0] + kerning[i] for char in line)
                    x_start -= line_width / 2
                    for char in line:
                        draw.text((x_start, y), char, font=font, fill=(0, 0, 0))
                        x_start += font.getsize(char)[0] + kerning[i]
                y += font.getsize('가')[1]
                x = x_start

        # Save image with a unique filename
        image.save(f'WebBanner_{template_id}.png')


def template(width, height, position, fontsize, size_ratio, direction):

    position_XY = (0, 0)

    if size_ratio == "1200:360":
        ref_width, ref_height = 1200, 360
        if direction == 'left':
            position_XY = (math.ceil(width/ref_width * 282), math.ceil(height/ref_height * position))
        elif direction == 'right' :
            position_XY = (math.ceil(width/ref_width * 682), math.ceil(height/ref_height * position))
        else:
            position_XY = (math.ceil(width/ref_width * 482), math.ceil(height/ref_height * position))
    elif size_ratio == "500:500":
        ref_width, ref_height = 500, 500
        if direction == 'left':
            position_XY = (math.ceil(width/ref_width * 282), math.ceil(height/ref_height * position))
        elif direction == 'right' :
            position_XY = (math.ceil(width/ref_width * 682), math.ceil(height/ref_height * position))
        elif direction == 'up':
            position_XY = (math.ceil(width/ref_width * position), math.ceil(height/ref_height * 282))
        elif direction == 'down' :
            position_XY = (math.ceil(width/ref_width * position), math.ceil(height/ref_height * 682))
        # else :
        #     position_XY = (math.ceil(width/ref_width * position), math.ceil(height/ref_height * ???))
    elif size_ratio == '360:1200':
        ref_width, ref_height = 360, 1200
        if direction == 'up':
            position_XY = (math.ceil(width/ref_width * position), math.ceil(height/ref_height * 282))
        elif direction == 'down' :
            position_XY = (math.ceil(width/ref_width * position), math.ceil(height/ref_height * 682))                                                                                                                                   
        else :
            position_XY = (math.ceil(width/ref_width * position), math.ceil(height/ref_height * 482))
    else:
        raise ValueError(f"Unknown size ratio: {size_ratio}")

    fontsize = math.ceil(height/ref_height * fontsize)

    return position_XY, fontsize


def get_templates_and_textboxes(template_size, purpose_list):
    # Get the number of textboxes from the length of the purpose list
    textbox_number = len(purpose_list)

    closest_size = get_nearest_size(template_size)

    # Get all templates that match the condition
    templates = Template.objects.filter(textbox_number=textbox_number, template_size=closest_size)

    # Get the template IDs
    template_ids = templates.values_list('template_id', flat=True)

    # Create a dictionary to store the TextBoxes for each template
    textboxes_for_templates = {}

    # Create a list to store the template IDs that meet the condition
    valid_template_ids = []

    # Get the TextBoxes for each template and check if the purposes match
    for template_id in template_ids:
        textboxes = TextBox.objects.filter(template_id=template_id)
        textboxes_for_templates[template_id] = list(textboxes)
        
        # Get the purposes of the TextBoxes for this template
        purposes = [textbox.purpose for textbox in textboxes]
        
        # Check if the purposes match the required ones
        if Counter(purposes) == Counter(purpose_list):
            valid_template_ids.append(template_id)

    return textboxes_for_templates, valid_template_ids, closest_size

def get_nearest_size(input_size):
    # Split the input size into width and height and calculate the ratio
    width, height = map(int, input_size.split(':'))
    input_ratio = width / height

    if input_ratio > 1.857:
        return '1200:360'
    elif input_ratio < 0.538:
        return '360:1200'
    else :
        return '500:500'