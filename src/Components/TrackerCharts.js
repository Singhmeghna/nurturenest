import React from "react";

export default function TrackerCharts() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="app">
          <div className="header">
            <div className="fat-burning">
              <span className="title">Fat burning</span>
              <span className="result">
                <span className="num">2351</span>
                <span className="unit">Kcal</span>
              </span>
            </div>
            <img
              src="https://s5.postimg.cc/ihnwcppif/user.jpg"
              className="user-img"
              alt=""
            />
            <div className="user-attendance">
              <span className="title">Attendance</span>
              <span className="result">
                <span className="num">12</span>
                <span className="unit">day</span>
              </span>
            </div>
          </div>
          <div className="body">
            <div className="attendance">
              <span className="title">Attendance</span>
              <ul>
                <li>
                  Mon
                  <span className="circle present"></span>
                  <span className="date">20</span>
                </li>
                <li>
                  Tue
                  <span className="circle absent"></span>
                  <span className="date">21</span>
                </li>
                <li>
                  Wed
                  <span className="circle present"></span>
                  <span className="date">22</span>
                </li>
                <li>
                  Thu
                  <span className="circle present"></span>
                  <span className="date">23</span>
                </li>
                <li>
                  Fri
                  <span className="circle absent"></span>
                  <span className="date">24</span>
                </li>
                <li>
                  Sat
                  <span className="circle present"></span>
                  <span className="date">25</span>
                </li>
                <li>
                  Sun
                  <span className="circle off"></span>
                  <span className="date">26</span>
                </li>
              </ul>
            </div>
            <div className="stats">
              <div className="monthly-stats">
                <span className="title">
                  Monthly training ranking
                  <span className="caption">987 mins</span>
                </span>
                <span className="rank">
                  32<span className="caption">th</span>
                </span>
              </div>
            </div>
            <div className="stats">
              <div className="monthly-stats">
                <span className="title">
                  Weekly training ranking
                  <span className="caption">508 mins</span>
                </span>
                <span className="rank">
                  40<span className="caption">th</span>
                </span>
              </div>
            </div>
            <div className="stats highlight">
              <div className="monthly-stats">
                <span className="title">
                  Overall training ranking
                  <span className="caption">3560 mins</span>
                </span>
                <span className="rank">
                  123<span className="caption">th</span>
                </span>
              </div>
            </div>
          </div>
          <div className="graph">
            <ul>
              <li className="graph-knob-mt-100">20</li>
              <li className="graph-knob-mt-50">21</li>
              <li className="graph-knob-mt-70">22</li>
              <li className="graph-knob-mt-110">23</li>
              <li className="graph-knob-mt-50">24</li>
              <li className="graph-knob-mt-60">25</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="yt">
        <a href="https://www.youtube.com/watch?v=_zMOFr4oDpE" target="_blank">
          <img
            width="151"
            src="https://s5.postimg.cc/vzwuxmw87/template.png"
            alt=""
          />
        </a>
      </div>
    </React.Fragment>
  );
}
