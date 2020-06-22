class App extends React.Component {
  state = {
    totalFollowers: '23,004',
    darkMode: false,
    platformsData: [
      {
        platform: 'facebook',
        name: '@nathanf',
        totalFollowers: '1987',
        changeFollowers: '12',
      },
      {
        platform: 'twitter',
        name: '@nathanf',
        totalFollowers: '1044',
        changeFollowers: '99',
      },
      {
        platform: 'instagram',
        name: '@realnathanf',
        totalFollowers: '11k',
        changeFollowers: '1099',
      },
      {
        platform: 'youtube',
        name: 'Nathan F.',
        totalFollowers: '8239',
        changeFollowers: '-144',
      }
    ],
    overviewsData: [
      {
        platform: 'facebook',
        overviewType: 'Page Views',
        overviewNumber: '87',
        overviewChange: '3%'
      },
      {
        platform: 'facebook',
        overviewType: 'Likes',
        overviewNumber: '52',
        overviewChange: '-2%'
      },
      {
        platform: 'instagram',
        overviewType: 'Likes',
        overviewNumber: '5462',
        overviewChange: '2257%'
      },
      {
        platform: 'instagram',
        overviewType: 'Profile Views',
        overviewNumber: '52k',
        overviewChange: '1375%'
      },
      {
        platform: 'twitter',
        overviewType: 'Retweets',
        overviewNumber: '117',
        overviewChange: '303%'
      },
      {
        platform: 'twitter',
        overviewType: 'Likes',
        overviewNumber: '507',
        overviewChange: '553%'
      },
      {
        platform: 'youtube',
        overviewType: 'Likes',
        overviewNumber: '107',
        overviewChange: '-19%'
      },
      {
        platform: 'youtube',
        overviewType: 'Total Views',
        overviewNumber: '1407',
        overviewChange: '-12%'
      },
    ]
  }

  followersBox = this.state.platformsData.map(platformData => (
    <div className={`followersBoxes__followersBox ${platformData.platform}`}>
      <h4 className="followersBoxes__name">
        <img src={`../images/icon-${platformData.platform}.svg`} className="followersBoxes__platformImg" />{platformData.name}</h4>
      <h3 className="followersBoxes__totalNumber">{platformData.totalFollowers}</h3>
      <h5 className="followersBoxes__text">FOLLOWERS</h5>
      <h6 className={`followersBoxes__todayNumber ${platformData.changeFollowers > 0 ? "increase" : "decrease"}`}>
        {platformData.changeFollowers > 0 ? <img src="../images/icon-up.svg" className="changeIcon" /> : <img src="../images/icon-down.svg" className="changeIcon" />}
        {`${platformData.changeFollowers > 0 ? platformData.changeFollowers : platformData.changeFollowers.substr(1)} Today`}</h6>
    </div>
  ));

  overview = this.state.overviewsData.map(overviewData => (
    <div className="overview__box">
      <h4 className="overwiew__text">
        {overviewData.overviewType}
      </h4>
      <img src={`../images/icon-${overviewData.platform}.svg`} className="overview__img" />
      <h3 className="overview__number">{overviewData.overviewNumber}</h3>
      <h5 className={`overview__change ${overviewData.overviewChange.slice(0, -1) > 0 ? "increase" : "decrease"}`}>
        {overviewData.overviewChange.slice(0, -1) > 0 ? <img src="../images/icon-up.svg" className="changeIcon" /> : <img src="../images/icon-down.svg" className="changeIcon" />}
        {overviewData.overviewChange}</h5>
    </div>
  ))

  changeMode = () => {
    this.setState({
      darkMode: !this.state.darkMode
    })
  }

  render() {
    return (
      <>
        <div className={`${this.state.darkMode ? "darkMode" : ""}`}>
          <header class="header">
            <h1 class="header__title">Social Media Dashboard</h1>
            <h2 class="header__text">Total Followers: {this.state.totalFollowers}</h2>
            <div class="header__darkMode">
              <h2 class="header__text">Dark Mode</h2>
              <div class="header__darkModeBtn" onClick={this.changeMode}>
                <span class="header__darkModeSwitch"></span>
              </div>
            </div>
          </header>
          <main class="main">
            <div class="followersBoxes">
              {this.followersBox}
            </div>
            <div class="overview">
              <h2 class="overview__title">Overview - Today</h2>
              {this.overview}
            </div>
          </main>
          <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">Łukasz Kurczab</a>.
            </div>
        </div>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))