import styled from "styled-components";

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <h1>XML Reader</h1>
    </PageContainer>
  );
};

export default HomePage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  min-height: 100vh;
  color: white;
  background-color: black;

  h1 {
    font-size: 30px;
  }
`;
