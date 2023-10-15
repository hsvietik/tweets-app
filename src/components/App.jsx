import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Tweets from '../pages/Tweets';
import SharedLayout from '../components/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
