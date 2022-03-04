import { useEffect } from 'react';
import { JobsContainer, SearchContainer } from '../../components';
import { useAppContext } from '../../context/appContext';

const AllJobs = () => {
  const { setEditFalse } = useAppContext();

  useEffect(() => {
    setEditFalse();
  }, []);
  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  );
};

export default AllJobs;
