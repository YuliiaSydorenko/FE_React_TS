import  { useState, createContext, FC } from 'react';
import Card from '../Card/Card';
import { BlogManagementWrapper, Input, Button } from './styles';

interface BlogContextProps {
  message: string;
  setMessage: (message: string) => void;
}

export const BlogContext = createContext<BlogContextProps>({
  message: '',
  setMessage: () => {}
});

const BlogManagement: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handlePost = () => {
    setMessage(inputValue);
    setInputValue('');
  };

  return (
    <BlogContext.Provider value={{ message, setMessage }}>
      <BlogManagementWrapper>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Write your message here..."
        />
        <Button onClick={handlePost}>Post</Button>
        <Card />
      </BlogManagementWrapper>
    </BlogContext.Provider>
  );
};

export default BlogManagement;
