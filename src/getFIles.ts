import fs from 'node:fs/promises';
import path from 'path';

type CommonPostData = {
  id: number;
  title: string;
  created_at: string;
};

type TextPost = {
  content: string;
} & CommonPostData;

type ImagePost = { image: string } & CommonPostData;
type Post = TextPost | ImagePost;

async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'posts');

  try {
    const files = await fs.readdir(postsDirectory);
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    const posts = await Promise.all(
      jsonFiles.map(async filename => {
        const filePath = path.join(postsDirectory, filename);
        const content = await fs.readFile(filePath, 'utf8');
        return JSON.parse(content) as Post;
      }),
    );

    return posts.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

console.log(await getPosts());
