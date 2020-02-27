/*
 * Compiles markdown versions of the website to pages in pages/visie.
 */
console.log("starting build");
const fs = require('fs')
const path = require('path')
// node.js, "classic" way:
var MarkdownIt = require('markdown-it')
var md = new MarkdownIt()
var counter = 0

const template = fs.readFileSync(path.resolve(__dirname, '..', 'templates', 'template.jsx'), 'utf8')
const categories = fs.readdirSync('./punten/')
const articles = []

function runCategory (category) {
  const catdir = './punten/' + category
  const punten = fs.readdirSync(catdir)
  for (var j = 0; j < punten.length; j++) {
    const ptdir = catdir + '/' + punten[j]
    const metafile = path.resolve(ptdir, 'meta.json')
    const meta = JSON.parse(fs.readFileSync(metafile))
    const title = meta.title
    var subtitle = ''
    if (meta.subtitle) {
      subtitle = meta.subtitle
    }
    const slug = meta.slug
    if (articles.filter(x => x.category === category &&
                        x.slug === slug).length > 0) {
      const msg = 'not going to import ' + ptdir + ', slug must be unique'
      throw msg
    }
    const url = encodeURIComponent(category + '_' + slug)
    articles.push({
      id: counter++,
      slug: slug,
      category: category,
      title: title,
      subtitle: subtitle,
      url: url
    })
    // console.log(articles[articles.length - 1])
    const fullpath = path.resolve('.', 'punten', category, punten[j], 'text.md')
    const content = fs.readFileSync(fullpath, 'utf8')
    // console.log(content)
    const contentHtml = md.render(content)
    // console.log(content_html)
    var tp = template
    tp = tp.replace('{{ category }}', category)
    tp = tp.replace('{{ title }}', title)
    tp = tp.replace('{{ subtitle }}', subtitle)
    tp = tp.replace('{{ content }}', contentHtml)

    const towrite = path.resolve('.',
      'pages',
      'visie',
      url + '.jsx')
    fs.writeFileSync(towrite, tp)
  }
}

function run () {
  console.log(__dirname)

  runCategory('main')
  for (var i = 0; i < categories.length; i++) {
    const category = categories[i]
    if (category === 'main') {
      continue
    }
    runCategory(category)
  }

  const towrite = {}
  var categoryIndex = 0
  while (categoryIndex < categories.length) {
    var category = categories[categoryIndex]
    const sorted = articles
      .filter(x => x.category === category)
      .sort((x, y) => x.number - y.number)
    towrite[category] = sorted

    categoryIndex++
  }

  var index = fs.readFileSync(path.resolve(__dirname, '..', 'templates', 'md_index.jsx'), 'utf8')
  index = index.replace('{{ punten }}', JSON.stringify(towrite))
  index = index.replace('`{{ categories }}`', '`' + JSON.stringify(categories) + '`')
  fs.writeFileSync(path.resolve('.', 'pages', 'visie.jsx'), index)
}

try {
  run()
  console.log('build success')
} catch (e) {
  console.error(e)
  console.error('build failed with error')
}
