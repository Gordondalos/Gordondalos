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


# preferred_syntax – выбор синтаксис :sass или :scss . По-умолчанию, установлен :scss.
# http_path – путь к проекту. Например, если для разработки вы используете папку dev/ , то необходимо в config.rb указать http_path = "dev/"
# css_dir – путь к файлам CSS. Путь указывается в зависимости от project_path. По-умолчанию, установлен "stylesheets" .
# sass_dir – путь к файлам SASS. Путь указывается в зависимости от project_path. По-умолчанию, установлен "sass".
# images_dir – путь к папке, в которой хранятся изображения. По-умолчанию "images".
# images_path – полный путь к изображениям. По-умолчанию <project_path>/<images_dir>.
# javascripts_dir – путь к javascript файлам. По-умолчанию "javascripts".
# line_comments – определяет будут ли добавлены комментарии в скомпилированный CSS файл. В комментарии указывается адрес строки в файле Scss из которого скомпилировался данный класс. Имеет значения true или false.
# output_style = :compressed – скомпилированный CSS будет сжат. Также могут быть заданы значения :nested , :expanded , :compact.