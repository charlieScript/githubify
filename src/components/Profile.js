import React, { useEffect, useState } from "react";
import Chart from "chart.js";
var GhPolyglot = require("gh-polyglot");

function Profile(props) {
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");
  // random colors
  function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let a = Math.floor(Math.random()) + 1;
    let randomColor = `rgba(${r}, ${g}, ${b}, ${a})`
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
    var ctx = document.getElementById("myChart");
    me.userStats(function (err, stats) {
      let newStats = [];
      if (stats !== undefined) {
        newStats = stats;
        var arrRandomColor = []
        for (let i = 0; i < stats.length; i++) {
          arrRandomColor.push(randomColor())
        }
      } else {
        console.log("empty data");
      }
      var myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: newStats.length !== 0 ? newStats.map((i) => i.label) : null,
          datasets: [
            {
              label: "# of Votes",
              data: newStats.length !== 0 ? newStats.map((i) => i.value) : null,
              backgroundColor: arrRandomColor,
              borderWidth: 1,
            },
          ],
        },
      });
    });
    let repoStars = []
    let repoSize = []
    let repoForks = []
    me.getAllRepos(function (err, stats) {
      // language, url
      // console.log(err || stats);
      repoStars = stats.sort((a, b) => a.starsgazer_count - b.starsgazer_count);
      repoSize = stats.sort((a, b) => b.size - a.size);
      repoForks = stats.sort((a, b) => b.forks_count - a.forks_count);
      // console.log(repoStars);
      console.log(repoForks);
    });
    fetch('https://api.github.com/rate_limit')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
    // fetch(`https://api.github.com/users/${input}/repos`)
    // .then(res => res.json())
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
  }, [input]);
  return (
    <div className="profile">
      <div className="image">
        <img src={data.avatar_url} alt="avatar_url" />
      </div>
      <h2>{data.name}</h2>
      <a href={data.html_url}>@{data.login}</a>
      <p>{date}</p>
      <div className="card-mini">
        <div className="cd">
          <p>{data.public_repos}</p>
          <p>Repostories</p>
        </div>
        <div className="cd">
          <p>{data.followers}</p>
          <p>Followers</p>
        </div>
        <div className="cd">
          <p>{data.following}</p>
          <p>Following</p>
        </div>
      </div>
      <canvas id="myChart" width="100" height="100"></canvas>
      
    </div>
  );
}

export default Profile;
