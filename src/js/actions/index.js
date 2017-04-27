import 'whatwg-fetch';
// import 'CREATE_STORY' from './types.js';



export const getStories = () => {
  return dispatch => {

    fetch('/stories')
      .then(response => response.json())
      .then((data) => {
        return dispatch({type: "GET_STORIES", payload: data.data })
      })
      .catch(err => console.log(err))

  }
}

export const getPanel = (storyid, panelid) => {
  return dispatch => {

    fetch(`/stories/${storyid}/panels/${panelid}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        return dispatch({type: "GET_PANEL", payload: data.data})
      })
      .catch(err => console.log(err))
  }
}

export const getChoices = (storyid, panelid) => {
  return dispatch => {
    fetch(`/stories/${storyid}/panels/${panelid}/choices`)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        return dispatch({type: "GET_CHOICES", payload: data.data})
      })
      .catch(err => console.log(err))
  }
}

export const getRow = (storyid) => {
  return dispatch => {
    fetch(`/stories/${storyid}/choices/listrow`)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        return dispatch({type: "GET_ROW", payload: data.data})
      })
      .catch(err => console.log(err))
  }
}

export const createStory = (props) => {
  return dispatch => {

    fetch("/stories", {
      method: 'post',
      type: "CREATE_STORY",
      body: props
    })

  .then(function (data) {
    console.log('Request succeeded with JSON response', data);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });

}

}

export const getPanels = (storyid) => {
  return dispatch => {
    fetch(`/stories/${storyid}/panels/`)
      .then(response => response.json())
      .then((data) => {
        console.log(data)

        return dispatch({type: "GET_PANELS", payload: data.data})
      })
      .catch(err => console.log(err))
  }
}
