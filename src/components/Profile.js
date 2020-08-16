import React, { useEffect, useState } from 'react';
import Chart from 'chart.js'
var GhPolyglot = require('gh-polyglot');

function Profile(props) {
  const [data, setData] = useState([]);
  const [date, setDate] = useState('');
  // avatar_url, login, followers, following, public_repos, url, company, location, created_at, name
  const input = props.location.state;
  useEffect(() => {
    fetch(`https://api.github.com/users/${input}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setDate(res.created_at);
        let x = new Date(res.created_at)
        return x;
      })
      .then((i) => {
        const option = { year: 'numeric', month: 'long', day: 'numeric' };
        setDate(i.toLocaleString(undefined, option))
      })
      .catch((err) => console.log(err));
    const me = new GhPolyglot(input);
    var ctx = document.getElementById('myChart');
    me.userStats(function (err, stats) {
      console.log(stats)
      let lab = stats.map(i => i.value)
      console.log(lab)
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: stats.map((i) => i.label),
          datasets: [
            {
              label: '# of Votes',
              data: stats.map((i) => i.value),
              // backgroundColor: [
              //   'rgba(255, 99, 132, 0.2)',
              //   'rgba(54, 162, 235, 0.2)',
              //   'rgba(255, 206, 86, 0.2)',
              //   'rgba(75, 192, 192, 0.2)',
              // ],
              // borderColor: [
              //   'rgba(255, 99, 132, 1)',
              //   'rgba(54, 162, 235, 1)',
              //   'rgba(255, 206, 86, 1)',
              //   'rgba(75, 192, 192, 1)',
              //   'rgba(153, 102, 255, 1)',
              //   'rgba(255, 159, 64, 1)',
              // ],
              borderWidth: 1,
            },
          ],
        },
      });
    });
    me.getAllRepos(function (err, stats) {
      // language, url
      console.log(err || stats);
    });
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

      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
}

export default Profile;
