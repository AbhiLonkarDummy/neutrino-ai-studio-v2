const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/65.jpg",
  "https://randomuser.me/api/portraits/women/56.jpg",
  "https://randomuser.me/api/portraits/men/78.jpg",
];

const AvatarStack = () => (
  <div className="flex items-center justify-center gap-4">
    <div className="flex -space-x-3">
      {avatars.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Avatar ${i + 1}`}
          className="w-8 h-8 rounded-full object-cover"
        />
      ))}
    </div>
    <p className="small-p">200k+ users worldwide</p>
  </div>
);

export default AvatarStack;
