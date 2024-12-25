import React, { useState } from 'react';
import { dummy } from './movieDummy'
import Movie from './components/movies'
import logo from './logo.svg';
import Banner1 from './images/죠르디 2.jpg';
import './App.css';

function App() {

  //  [a,b] a는 남자 코트 추천이 들어가고, b는 이 말을 수정할 부분
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '관악구 맛집 추천','진주의 코딩 일기']); 
  let [좋아요수, 좋아요수변경] = useState([0,0,0]);
  let posts = '강남 고기 맛집';
  const 좋아요증가 = (index) => {
    let 새로운좋아요수 = [...좋아요수];
    새로운좋아요수[index] += 1;
    좋아요수변경(새로운좋아요수);
  };

  // function 함수(){
  //   return 좋아요수변경(좋아요수 + 1)
  // }
  //  {posts}대신 함수()를 넣어도 됨.

  

  return (
    <div className="App">
     {/* 안에 쌩으로 html을 작성해도 됨. html 대신 jsx를 써야함.*/}
       {/* 헤더 */}
     <div className="black-nav">
       {/* <div style = {{color : 'blue', fontSize : '30px'}}>개발 Blog</div> */}
       <div>ZWacth | 영화</div> 
       <div className="login">Login</div> 
     </div>
          {/* 배너 */}
          <div className="app-container">
            {
              dummy.results.map((item) => {
                return (
                  <Movie
                    title={item.title}
                    poster_path={item.poster_path}
                    vote_average={item.vote_average}
                  />
                )
              })
            }
      </div>



      {/* Webhook연동 시험 */}
      {/* Webhook연동 시험 */}





      <div className="weather">
  <span>요즘 같은 날씨, 이런 영화는 어때요?</span>
  <div className="weather-movies">
    {dummy.results.slice(0, 3).map((movie, index) => ( // 상위 3개 영화만 추천
      <div key={index} className="weather-movie">
        <img 
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
          alt={movie.title} 
          className="movie-poster"
        />
        <div className="movie-info">
          <h4>{movie.title}</h4>
          <p>평점: {movie.vote_average}</p>
        </div>
      </div>
    ))}
  </div>
</div>
     {/* <img src={logo} /> */}
     {/* <h4> { posts }</h4> */}
     <div className='list'>
      <h3> { posts }</h3> 
      <p>12월 17일 발행</p>
      <hr/>
     </div>
     <div className='list'>
      {/* <h3> { 글제목[0] }<span onClick={ 함수() }>❤️</span> {좋아요수}</h3> */}
      <h3> { 글제목[0] }<span onClick={()=> 좋아요증가(0)}>❤️</span> {좋아요수[0]}</h3>
      <p>12월 17일 발행</p>
      <hr/>
     </div>
     <div className='list'>
      <h3> { 글제목[1] }<span onClick={()=> 좋아요증가(1)}>❤️</span> {좋아요수[1]}</h3>
      <p>12월 17일 발행</p>
      <hr/>
     </div>
     <div className='list'>
      <h3> { 글제목[2] }<span onClick={()=> 좋아요증가(2)}>❤️</span> {좋아요수[2]}</h3>
      <p>12월 17일 발행</p>
      <hr/>
     </div>



    </div>
  );
}

export default App;
