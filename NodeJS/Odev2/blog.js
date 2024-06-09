// Create Posts
class Post {
    constructor(title, content, author, year) {
        this.title = title;
        this.content = content;
        this.author = author
        this.year = year;
    }
}
const Post1 = new Post("Başlık 1", "Gönderi 1", "L. Ipsum", 2011);
const Post2 = new Post("Başlık 2", "Gönderi 2", "D. Amet", 2012);
const Post3 = new Post("Başlık 3", "Gönderi 3", "C. Elit", 2013);
const Post4 = new Post("Başlık 4", "Gönderi 4", "S. T. Labore", 2014);
let posts = [Post1, Post2, Post3, Post4];
console.log();
// List Posts
const listPosts = () => {
    posts.map((post) => {
        console.log(`Başlık: ${post.title}, Gönderi: ${post.content}, Yazar: ${post.author}, Yıl: ${post.year}`);
    })
}
// Add Post
const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts)
        reject("Hata Oluştu");
    })
    return promise1;
}
// Show Posts
async function showPosts() {
    try {
        await addPost(createPost);
        listPosts();
    } catch(error) {
        console.log(error);
    }
}
// Create Post
const createPost = new Post(process.argv[2], process.argv[3], process.argv[4], Number(process.argv[5]));;
// Run
showPosts();