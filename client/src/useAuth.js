//just type rfc
import React from 'react'
import { useState, useEffect } from 'react'
//make sure to install axios before
//npm i axios
import axios from 'axios'


export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()
    //we need just abve three datas 
    //inorder to get it will use useEffect



    //TOKEN CREATION
    useEffect(() => {
        axios
            .post("http://localhost:3001/login", {
                code,
            })
            .then(res => {
                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
                setExpiresIn(res.data.expiresIn)
                window.history.pushState({}, null, "/")
            })
            //if token expries we qre getting error
            //so when expired send user to re LOGIN i.e at home page
            .catch(() => {
                window.location = "/"
            })
    }, [code])



    //TOKEN REFRESHING ->AFTER TIMOUT
    //when ever TOKEN expires then this below fun will refresh automatically
    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
          axios
            .post("http://localhost:3001/refresh", {
              refreshToken,
            })
            .then(res => {
              setAccessToken(res.data.accessToken)
              setExpiresIn(res.data.expiresIn)
            })
            .catch(() => {
              window.location = "/"
            })
        }, (expiresIn - 60) * 1000)
    
        return () => clearInterval(interval)
      }, [refreshToken, expiresIn])






    return accessToken;
    //runs everytime when code changes
}

