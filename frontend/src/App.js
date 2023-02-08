import SearchBar from './components/searchBar';
import './App.css';
import Table from './components/table';
import { ComponentsContainer, Title } from './style';
import HeroInformation from './components/heroInformation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FetchAlignments, FetchGenders, FetchPublishers, } from './redux/slices/anotherHeroInfoSlice'
import { cleanHero } from './redux/slices/heroSlice';
import Response from './components/response';
import { showResponse } from './redux/slices/showResponse';

function App() {
  const dispatch = useDispatch()
  const modalState = useSelector(state => state.modal.show)
  const showResponseState = useSelector(state => state.response.show)

  useEffect(() => {
    dispatch(FetchPublishers())
    dispatch(FetchGenders())
    dispatch(FetchAlignments())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!modalState)
      dispatch(cleanHero())
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalState])

  useEffect(() => {
    if (showResponseState !== "") {
      const timmer = setTimeout(() => {
        dispatch(showResponse(""))
      }, [1000])
      return () => clearTimeout(timmer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showResponseState])

  return (
    <div className="App">
      <ComponentsContainer>
        <Title>Heroes</Title>
        <SearchBar />
        <Table />
      </ComponentsContainer>
      {modalState && <HeroInformation />}
      {showResponseState !== "" && <Response msm={showResponseState} />}
    </div>
  );
}

export default App;
