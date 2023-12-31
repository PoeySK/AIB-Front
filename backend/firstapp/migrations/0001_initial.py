# Generated by Django 4.2.1 on 2023-05-27 13:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Template',
            fields=[
                ('template_id', models.AutoField(primary_key=True, serialize=False)),
                ('textbox_number', models.IntegerField()),
                ('template_size', models.CharField(choices=[('1200:360', '1200:360'), ('500:500-X', '500:500-X'), ('500:500-Y', '500:500-Y'), ('360:1200', '360:1200')], max_length=10)),
            ],
            options={
                'db_table': 'Template',
            },
        ),
        migrations.CreateModel(
            name='TextBox',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('position', models.FloatField()),
                ('width_sort', models.CharField(choices=[('left', 'left'), ('right', 'right')], max_length=5)),
                ('height_sort', models.CharField(choices=[('up', 'up'), ('down', 'down')], max_length=4)),
                ('font_size', models.FloatField()),
                ('line_break', models.IntegerField()),
                ('purpose', models.CharField(choices=[('큰 홍보문구', '큰 홍보문구'), ('작은 홍보문구', '작은 홍보문구'), ('상세 설명', '상세 설명'), ('시간&장소', '시간&장소')], max_length=10)),
                ('template', models.ForeignKey(db_column='template_id', on_delete=django.db.models.deletion.CASCADE, to='firstapp.template')),
            ],
            options={
                'db_table': 'TextBox',
            },
        ),
    ]
