import React, { useEffect, useState } from "react";
import Chart from "chart.js";
var GhPolyglot = require("gh-polyglot");

function Profile(props) {
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");
  const [rate, setRate] = useState("");
  const [repos, setRepos] = useState([]);
  const [num, setNum] = useState(6);
  // random colors
  function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let a = Math.floor(Math.random()) + 1;
    let randomColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    return randomColor;
  }
  // avatar_url, login, followers, following, public_repos, url, company, location, created_at, name
  const input = props.location.state;
  useEffect(() => {
    fetch(`https://api.github.com/users/${input}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setDate(res.created_at);
        let x = new Date(res.created_at);
        return x;
      })
      .then((i) => {
        const option = { year: "numeric", month: "long", day: "numeric" };
        setDate(i.toLocaleString(undefined, option));
      })
      .catch((err) => console.log(err));
    // random background color
    const me = new GhPolyglot(input);
    me.userStats(function (err, stats) {
      let newStats = [];
      if (stats !== undefined) {
        newStats = stats;
        var arrRandomColor = [];
        for (let i = 0; i < stats.length; i++) {
          arrRandomColor.push(randomColor());
        }
      }
      var ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: newStats.length !== 0 ? newStats.map((i) => i.label) : null,
          datasets: [
            {
              label: "Top Languages",
              data: newStats.length !== 0 ? newStats.map((i) => i.value) : null,
              backgroundColor: arrRandomColor,
              borderWidth: 1,
            },
          ],
        },
      });
    });
    // let repoStars = [];
    // let repoSize = [];
    // let repoForks = [];
    me.getAllRepos(function (err, stats) {
      // let repos = [];
      // if (stats === undefined) {
      //   console.log("empty");
      // } else {
      //   repos = stats;
      // }
      // // language, url
      // // console.log(err || stats);
      // repoStars =
      //   repos.length !== 0
      //     ? repos.map((i) => {
      //         return [i.stargazers_count, i.name];
      //       })
      //     : null;
      // repoSize = repos.length !== 0 ? repos.map((i) => i.size) : null;
      // repoForks = repos.length !== 0 ? repos.map((i) => i.forks_count) : null;
    });
    fetch("https://api.github.com/rate_limit")
      .then((res) => res.json())
      .then((res) => {
        setRate(res.rate.remaining);
        console.log(res);
      })
      .catch((err) => console.log(err));
    // fetch(`https://api.github.com/users/${input}/repos`)
    // .then(res => res.json())
    // .then(res => {
    //   let repos = [];
    //   repos = res;
    //   let repoStars = []
    //   repoStars = repos.map(i => i.stargazers_count)
    //   console.log(repoStars.sort((a , b) => b - a));
    // })
    // .catch(err => console.log(err))
  }, [input]);
  function loadMore() {
    setNum((num) => num + 6);
    console.log(repos);
    console.log(num);
  }
  useEffect(() => {
    fetch(`https://api.github.com/users/${input}/repos?per_page=${num}`)
      .then((res) => res.json())
      .then((res) => {
        setRepos(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [num, input]);

  return (
    <div className="profile">
      <div className="rate">
        <p>{rate}/60</p>
        <p>Requests Left</p>
      </div>
      <div className="image">
        <img src={data.avatar_url} alt="avatar_url" />
      </div>
      <h1 className="name">{data.name}</h1>
      <h2>
        <a
          href={data.html_url}
          className="url"
          target="_blank"
          rel="noopener noreferrer"
        >
          @{data.login}
        </a>
      </h2>
      <div className="info">
        <span>
          <svg
            aria-hidden="true"
            className="octicon"
            height="16"
            role="img"
            viewBox="0 0 14 16"
            width="14"
            style={{
              display: "inline-block",
              fill: "currentcolor",
              userSelect: "none",
              verticalAlign: "text-bottom",
            }}
          >
            <path
              fillRule="evenodd"
              d="M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z"
            ></path>
          </svg>
          {"    Joined "}
          {date}
        </span>
      </div>
      <div className="card-mini">
        <div className="cards">
          <p>{data.public_repos}</p>
          <p>Repostories</p>
        </div>
        <div className="cards">
          <p>{data.followers}</p>
          <p>Followers</p>
        </div>
        <div className="cards">
          <p>{data.following}</p>
          <p>Following</p>
        </div>
      </div>
      <div className="stats">
        <div className="lang">
          <h2>Top languages</h2>
          <canvas id="myChart"></canvas>
        </div>
      </div>
      <div className="repos">
        <h2 style={{ textAlign: 'center'}}>Repositories</h2>
        {/* <div className="repo">
          {repos.length !== 0
            ? repos.map((i) => (
                <div className="card" key={i.id}>
                    <h2>{i.name}</h2>
                    <div className="tags">
                      <p><i className="fa fa-language"></i>{i.language}</p>
                      <p><i className="fa fa-star"></i>{i.stargazers_count}</p>
                      <p><i className="fa fa-utensils"></i>{i.forks_count}</p>
                      <p><i className="fa fa-size"></i>{i.size}kb</p>
                      <p><a href={i.html_url} target='_blank' rel="noopener noreferrer"><i className="fa fa-github"></i>Repo Link</a></p>
                    </div>
                </div>
              ))
            : null}
        </div> */}
      </div>
        {/* <button onClick={loadMore}>Load More Repos</button> */}
    </div>
  );
}

export default Profile;
