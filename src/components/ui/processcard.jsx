const ProcessCard = ({ icon: Icon, title, description }) => (
  <div className="w-[320px] p-6 rounded-xl  flex flex-col items-center gap-6 text-center">
    <Icon
      className="w-[56px] h-[56px]"
      style={{ color: "var(--brand-primary-color)" }}
    />
    <div className="flex flex-col gap-2">
      <h4 className="process-card-title">{title}</h4>
      {description && <p>{description}</p>}
    </div>
  </div>
);

export default ProcessCard;
