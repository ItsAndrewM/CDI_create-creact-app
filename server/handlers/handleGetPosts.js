const { getPosts } = require("../utils/getPosts");

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const showdown = require("showdown");
const converter = new showdown.Converter();
converter.setOption('tables', true);

const postsDirectory = path.join(process.cwd(), 'posts');

const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

const getPostData = async (id) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use showdown to convert markdown into HTML string

  const processedContent = converter.makeHtml(matterResult.content)
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}


const handleGetPosts = async (req, res) => {
  try {
    const results = [];
    const posts = await getPosts();

    const ids = await getAllPostIds();
    for (const t of ids) {
      const p = await getPostData(t.params.id);
      const found = posts.find((ele) => {
        return ele.title.rendered.toLowerCase().includes(p.title.toLowerCase())
      })
      found.content.rendered = p.contentHtml
      results.push(found)
    }
    if (results) {
      res.status(200).json({
        status: 200,
        message: `${results.length} posts retrieved successfully`,
        data: results,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "something went wrong, posts were not retrieved",
        error: results,
      });
    }
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

module.exports = { handleGetPosts };
