const TestimonialCard = ({ text, name, role, avatar }) => {
  return (
    <div className="h-full testimonial-card text-left p-6 rounded-2xl w-[360px] flex flex-col justify-between gap-6">
      <p className="testimonial-review">"{text}"</p>

      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col gap-0.5">
          <p className="testimonial-user">{name}</p>
          <p className="testimonial-role">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
