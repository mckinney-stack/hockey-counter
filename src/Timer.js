import { FormattedMessage } from 'react-intl';
import { StyledButton, StyledTimer, TimeDisplay } from './StyledComponents';
import { FaPlay, FaStop } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

export default function Timer({ userTime, isActive, isFirstRender, handlePlay, handleStop, handleReset, userName, isCountdownOver, onMouseEnter, onMouseLeave }) {
  return (
    <StyledTimer isFirstRender={isFirstRender}>
      {isFirstRender ? (
        <StyledButton id="play" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={handlePlay}><FormattedMessage id="play" className="formatted-message" /><FaPlay /></StyledButton>
      ) : isActive ? (
        <StyledButton id="stop" onClick={() => handleStop(userName, userTime, isCountdownOver)}><FormattedMessage id="stop" className="formatted-message" /><FaStop /></StyledButton>
      ) : (
        <StyledButton id="reset" onClick={handleReset}><FormattedMessage id="reset" className="formatted-message" /><GrPowerReset /></StyledButton>
      )}
      <TimeDisplay>{userTime}</TimeDisplay>
    </StyledTimer>
  );
}
