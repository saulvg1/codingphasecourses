export default (req, res) => {
  const {
    query: { post },
  } = res;
  res.status(200).json({ postId: post });
};
