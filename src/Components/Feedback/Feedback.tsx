import React, { useState } from 'react';
import Button from '../Button/Button';
import { FeedbackWrapper, FeedbackButtons, LikeButton, DislikeButton, ResetButton, Icon } from './styles';
import { FeedbackProps } from './types';

const Feedback: React.FC<FeedbackProps> = () => {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  const handleLike = (): void => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleDislike = (): void => {
    setDislikes((prevDislikes) => prevDislikes + 1);
  };

  const resetResults = (): void => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <FeedbackWrapper>
      <FeedbackButtons>
        <LikeButton>
          <Icon src="/src/assets/Like.jpg" alt="Like" />
          <span>{likes}</span>
          <Button name="Like" type="button" onClick={handleLike} />
        </LikeButton>
        <DislikeButton>
          <Button name="Dislike" type="button" onClick={handleDislike} />
          <span>{dislikes}</span>
          <Icon src="/src/assets/down.jpg" alt="Dislike" />
        </DislikeButton>
        <ResetButton>
          <Button name="Reset Results" type="button" onClick={resetResults} />
        </ResetButton>
      </FeedbackButtons>
    </FeedbackWrapper>
  );
}

export default Feedback;

