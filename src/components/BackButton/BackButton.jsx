import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

const Button = styled.button`
  margin: 20px auto 0px 50px;
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5736a3;
  border-radius: 10px;
  color: #ebd8ff;
  &:hover {
    background-color: #4b2a99;
  }
`;
const Arrow = styled(FaArrowCircleLeft)`
  width: 20px;
  height: 20px;
`;

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => {
          navigate("/", { replace: true });
        }}
      >
        <Arrow />
      </Button>
    </>
  );
};
