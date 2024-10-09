import matter from 'gray-matter';

function getSlug(value) {
  if (!value) {
    return null;
  }

  return value.replace(/^.*[\\\/]/, '').slice(0, -3);
}

export default function getPosts() {
  const posts = ((context) => {
    const keys = context.keys().reverse();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      const slug = getSlug(key);
      const value = values[index];
      const document = matter(value.default);

      const getSlugAndTitle = (i) => {
        const sl = getSlug(keys[i]);

        if (!sl) return null;

        const vl = values[i];
        const doc = matter(vl.default);

        return { title: doc.data.title, slug: sl };
      }

      const previous = getSlugAndTitle(index - 1);
      const next = getSlugAndTitle(index + 1);

      return {
        frontmatter: { ...document.data, previous, next },
        markdownBody: document.content,
        slug,
      };
    });

    return data.reduce((list, current) => {
      if(!list.find((i) => i.slug === current.slug)) {
        list.push(current);
      }
      return list;
    }, []);
  })(require.context('../posts', true, /\.md$/));

  return posts;
}
