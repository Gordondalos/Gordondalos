require 'compass/import-once/activate'
# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
preferred_syntax = :sass
css_dir = "css"
sass_dir = "sass"
images_dir = "imgs"
javascripts_dir = "js"
output_style = :compressed

# preferred_syntax = :sass
# http_path = '/'
# css_dir = 'assets/stylesheets'
# sass_dir = 'assets/sass'
# images_dir = 'assets/images'
# javascripts_dir = 'assets/javascripts'
# relative_assets = true
# line_comments = true
# output_style = :compressed


# preferred_syntax � ����� ��������� :sass ��� :scss . ��-���������, ���������� :scss.
# http_path � ���� � �������. ��������, ���� ��� ���������� �� ����������� ����� dev/ , �� ���������� � config.rb ������� http_path = "dev/"
# css_dir � ���� � ������ CSS. ���� ����������� � ����������� �� project_path. ��-���������, ���������� "stylesheets" .
# sass_dir � ���� � ������ SASS. ���� ����������� � ����������� �� project_path. ��-���������, ���������� "sass".
# images_dir � ���� � �����, � ������� �������� �����������. ��-��������� "images".
# images_path � ������ ���� � ������������. ��-��������� <project_path>/<images_dir>.
# javascripts_dir � ���� � javascript ������. ��-��������� "javascripts".
# line_comments � ���������� ����� �� ��������� ����������� � ���������������� CSS ����. � ����������� ����������� ����� ������ � ����� Scss �� �������� ��������������� ������ �����. ����� �������� true ��� false.
# output_style = :compressed � ���������������� CSS ����� ����. ����� ����� ���� ������ �������� :nested , :expanded , :compact.