import styled from '@emotion/styled';
import backgroundImage from '../../Pictures/messages.png';
import logo from '../../Pictures/logo.svg';

export const CardContainer = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  padding-top: 178px;
  border-radius: 20px;
  background-image: url(${logo}), url(${backgroundImage}),
    linear-gradient(115deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 76px 22px, 308px 168px, auto;
  background-repeat: no-repeat;
  background-position: 20px 20px, 36px 28px, center;
  box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);
`;

export const Avatar = styled.div`
  margin: 0px auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ebd8ff;
  box-shadow: 0px 4.39163px 3.29372px 0px #fbf8ff inset,
    0px -2.19582px 4.39163px 0px #ae7be3 inset;
  filter: drop-shadow(
    0px 4.391631126403809px 4.391631126403809px rgba(0, 0, 0, 0.06)
  );

  &::before,
  &::after {
    content: '';
    display: block;
    width: 150px;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 2.5777px 0px #fbf8ff inset,
      0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
      0px -1.71846px 3.43693px 0px #ae7be3 inset;
    position: absolute;
    z-index: -1;
    top: 50%;
    transform: translateY(-50%);
  }
  &::before {
    right: 100%;
  }
  &::after {
    left: 100%;
  }
`;

export const AvatarImg = styled.img`
  background-color: #5736a3;
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;
export const UserName = styled.p`
  text-align: center;
  color: #ebd8ff;
  font-size: 20px;
  text-transform: uppercase;
`;
export const Tweets = styled.p`
  margin-top: 16px;
  text-align: center;
  color: #ebd8ff;
  font-size: 20px;
  text-transform: uppercase;
`;
export const Followers = styled.p`
  margin-top: 16px;
  text-align: center;
  color: #ebd8ff;
  font-size: 20px;
  text-transform: uppercase;
`;
export const Button = styled.button`
  display: block;
  margin: 26px auto 0px;
  width: 196px;
  padding: 14px 28px;
  border-radius: 10.311px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  color: #373737;
  font-weight: 600;
  text-transform: uppercase;
`;
