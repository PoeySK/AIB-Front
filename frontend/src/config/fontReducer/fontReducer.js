export const SET_FONT_DATA = 'SET_FONT_DATA';

export const setFontData = (index, fontSizes, fontColor) => ({
    type: SET_FONT_DATA,
    payload: {
        index,
        fontSizes,
        fontColor,
    }
});


const initialState = {
    textElement: {
        fontSizes: [30, 55], // array(int)
        fontColor: "#000000", // string
    }
};

export const FontReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FONT_DATA:
            const { index, fontSizes, fontColor } = action.payload;
            const newTextElement = { ...state.textElement };
            newTextElement.fontSizes[index] = fontSizes;
            newTextElement.fontColor = fontColor;
            return {
                ...state,
                textElement: newTextElement,
            };
        default:
            return state;
    }
};

/*
Create Background
response_data = {
            'image': image_base64, -> base64 decoding
            'text_color' : text_color -> string(#000000)
            'changed_texts': changed_texts, -> array(string)
            'position': position, -> array({int, int})
            'font_size': font_size, -> array(int)
            'kerning': kerning, -> array(float)
            'alignments': alignments, -> string
        }

Non Create Background
response_data = {
            'background_color': background_color_arr,
            'text_color': text_color_arr,
            'changed_texts': changed_texts,
            'position': position,
            'font_size': font_size,
            'kerning': kerning,
            'alignments': alignments,
        }
*/