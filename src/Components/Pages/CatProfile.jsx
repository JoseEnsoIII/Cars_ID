import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { cats } from '../JS/Cats_ID';
import styled from 'styled-components';

const CatProfile = () => {
  const { id } = useParams();
  const cat = cats.find(c => c.id === Number(id));
  const [age, setAge] = useState({ years: 0, months: 0, weeks: 0 });
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  useEffect(() => {
    if (!cat?.birthDate) return;

    const calculateAge = () => {
      const now = moment();
      const birth = moment(cat.birthDate);
      const years = now.diff(birth, 'year');
      const months = now.subtract(years, 'years').diff(birth, 'month');
      const weeks = now.subtract(months, 'months').diff(birth, 'week');
      setAge({ years, months, weeks });
    };

    calculateAge();
    const interval = setInterval(calculateAge, 604800000);
    return () => clearInterval(interval);
  }, [cat]);

  if (!cat) return <NotFound>Cat not found</NotFound>;

  return (
    <Container>
      <CloseButton onClick={() => window.history.back()}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </CloseButton>

      <ProfileSection>
        <ProfileImage onClick={() => setIsImagePopupOpen(true)}>
          <img src={cat.image} alt={cat.name} />
        </ProfileImage>
        <Name>{cat.name}</Name>
        <Badges>
          <Badge accent="#ffeaa7">{cat.race}</Badge>
          <Badge accent="#dfe6e9">{cat.gender}</Badge>
        </Badges>
      </ProfileSection>

      <AgeGrid>
        <AgeItem>
          <AgeValue>{age.years}</AgeValue>
          <AgeLabel>Years</AgeLabel>
        </AgeItem>
        <AgeItem>
          <AgeValue>{age.months}</AgeValue>
          <AgeLabel>Months</AgeLabel>
        </AgeItem>
        <AgeItem>
          <AgeValue>{age.weeks}</AgeValue>
          <AgeLabel>Weeks</AgeLabel>
        </AgeItem>
      </AgeGrid>

      <InfoCard>
        <InfoItem>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#636e72">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
          </svg>
          <span>{cat.location}</span>
        </InfoItem>
        <InfoItem>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#636e72">
            <path d="M12 2a9 9 0 00-9 9c0 4.17 2.84 7.8 6.69 8.89L12 22l2.31-2.11C18.16 18.8 21 15.17 21 11a9 9 0 00-9-9zm0 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V15a3 3 0 01-3 3 3 3 0 01-3-3v-.26A6.93 6.93 0 015 11a7 7 0 017-7z"/>
          </svg>
          <span>{cat.color} · {cat.eyeColor} eyes</span>
        </InfoItem>
      </InfoCard>

      <Description>{cat.description}</Description>

      <ActionButtons>
        <ActionButton href={cat.links.location} target="_blank" rel="noopener noreferrer" accent="#48dbfb">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
          </svg>
          View Location
        </ActionButton>

        <ActionButton href={cat.links.gallery} target="_blank" rel="noopener noreferrer" accent="#ff7675">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M8.5 13.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5zM16 3V1h2v2h2v2h-2v2h-2V5h-2V3h2zM3 19V3h9v2h7v9.23l-2-2.58V7h-5v2H5v8h6.68l2 2H3z"/>
          </svg>
          Photo Gallery
        </ActionButton>

        <ActionButton href={cat.links.familyTree} target="_blank" rel="noopener noreferrer" accent="#6c5ce7">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          Family Tree
        </ActionButton>
      </ActionButtons>

      <ParentLink href={cat.links.parentInfo}>
        Contact Parents if Lost
      </ParentLink>

      {isImagePopupOpen && (
        <ImagePopup onClick={() => setIsImagePopupOpen(false)}>
          <img src={cat.image} alt={cat.name} />
        </ImagePopup>
      )}
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background 0.2s;
  
  &:hover {
    background: rgba(0,0,0,0.05);
  }
`;

const ProfileSection = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #48dbfb;
  padding: 4px;
  margin: 0 auto 1rem;
  cursor: pointer;
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Name = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0.5rem 0;
  color: #2d3436;
`;

const Badges = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Badge = styled.span`
  background: ${props => props.accent};
  padding: 0.25rem 1rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

const AgeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const AgeItem = styled.div`
  text-align: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 0.75rem;
`;

const AgeValue = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #48dbfb;
`;

const AgeLabel = styled.div`
  font-size: 0.75rem;
  color: #636e72;
`;

const InfoCard = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  color: #636e72;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  color: #636e72;
  margin-bottom: 1.5rem;
`;

const ActionButtons = styled.div`
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const ActionButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${props => props.accent};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${props => `${props.accent}40`};
  }
`;

const ParentLink = styled.a`
  display: block;
  text-align: center;
  color: #48dbfb;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  border-top: 1px solid #f0f0f0;
  padding-top: 1rem;
  transition: all 0.2s;
  
  &:hover {
    text-decoration: underline;
    color: #2d9cdb;
  }
`;

const ImagePopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  
  img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 1rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.25rem;
  color: #636e72;
`;

export default CatProfile;