const TeamCard = ({ name, role, image }) => {
  return (
    <div className="w-[280px] h-[380px] rounded-2xl overflow-hidden relative flex-shrink-0">
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
        <h4 className="">{name}</h4>
        <p className="">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
