import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 300px;
  margin: 0 auto;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: transform 250ms linear, box-shadow 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15), 0px 4px 8px rgba(0, 0, 0, 0.12),
      1px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Description = styled.div`
  padding-top: 45px;
  padding-bottom: 35px;
`;

export const Name = styled.p`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 500;
`;

export const Location = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #a8a59d;
`;

export const Tag = styled(Location)`
  margin-bottom: 15px;
`;

export const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`;

export const Statistics = styled.ul`
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-top: 1px solid #b2c2bc;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: #d9faee;
`;

export const StatisticsItemLast = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  padding: 15px 20px;
`;

export const StatisticsItem = styled(StatisticsItemLast)`
  border-right: 1px solid #b2c2bc;
`;

export const StatisticsLabel = styled.span`
  color: #a8a59d;
`;

export const StatisticsNumber = styled.span`
  font-weight: 600;
`;
