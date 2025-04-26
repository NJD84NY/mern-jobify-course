import Wrapper from '../assets/wrappers/StatItem';

function StatItem({ count, title, icon, color, bcg }) {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className='count'>{count}</span>
        <header className='icon'>{icon}</header>
      </header>
      <h5 className='title'>{title}</h5>
    </Wrapper>
  );
}

export default StatItem;
