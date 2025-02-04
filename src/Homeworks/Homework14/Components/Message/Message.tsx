import { useContext } from 'react';
import { MessageWrapper } from "./styles";
import { BlogContext } from "../BlogManagement/BlogManagement";

function Message() {
  const { message } = useContext(BlogContext);

  return (
    <MessageWrapper>
      {message}
    </MessageWrapper>
  );
}

export default Message;
