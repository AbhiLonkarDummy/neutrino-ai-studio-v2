import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
const UseCaseCard = ({ title, description, id, imageUrl, link }) => {
  const navigate = useNavigate();
  return (
    <div
      className="usecase-card w-[360px] p-4 rounded-lg"
      style={{ backgroundColor: "var(--testimonial-card-background)" }}
    >
      <div className="flex flex-col gap-4">
        {/* Image */}
        <div className="w-full">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover rounded-3xl"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-6  text-left">
          <div className="use-case-content flex flex-col gap-3">
            <h3 className="usecase-title">{title}</h3>
            <p
              className=""
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {description}
            </p>
          </div>
          <div className="usecase-btn flex gap-2">
            <Button
              className="usecase-secondary-btn btn flex-1"
              onClick={() => navigate(`/usecase/details/${id}`)}
            >
              Learn more <ArrowRight className="ml-0.5 w-4 h-4" />
            </Button>

            <Button
              className="primary-btn btn flex-1"
              onClick={() => navigate(`/usecase/chatbot/${id}`)}
            >
              Use Chat bot <ArrowRight className="ml-0.5 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseCard;
