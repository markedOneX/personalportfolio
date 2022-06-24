function ProCard({ image, title, desc, tags }) {
  return (
    <div className="proCard">
      <div>{image}</div>
      <div>{title}</div>
      <div>{desc}</div>
      <div>{tags}</div>
    </div>
  );
}

export default ProCard;
