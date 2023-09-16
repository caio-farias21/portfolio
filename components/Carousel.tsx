"use client"
import React, { useEffect, useRef, useState } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import GithubCard from './GithubCard';
import { Octokit } from 'octokit';
import { Skeleton } from './ui/skeleton';

const GITHUB_USERNAME = "caio-farias21"
const Carousel = () => {
  const flickityRef = useRef<Flickity | null>(null);
  const [repositories, setRepositories] = useState({})

  useEffect(() => {
    if (typeof window !== 'undefined' && Object.entries(repositories).length !== 0) {
      const carousel = document.querySelector('.carousel');
      if (!carousel) return
      
      if (!flickityRef.current) {
        initFlickity().then(Flickity => {
          flickityRef.current = new Flickity(carousel, {
            imagesLoaded: true,
            percentPosition: false,
            pageDots: false,
            prevNextButtons: false,
            contain: true,
          }) as any;
        })
      }
    }
  }, [repositories]);

  async function initFlickity() {
    return (await import('flickity')).default;
  }

  useEffect(() => {
    const octokit = new Octokit()
    octokit.request('GET /users/{username}/repos', {
      username: GITHUB_USERNAME,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      }
    }).then(response => setRepositories(response.data))
  }, [])

  if (Object.entries(repositories).length === 0) {
    return (
      <div className="flex overflow-hidden mt-5">
        <div className='w-1 lg:w-14 me-5'></div>
        <div className='me-5 mb-5'><Skeleton className='w-[300px] h-[120px] rouded' /></div>
      </div>
    )
  }

  return (
    <div className="carousel">
      <div className='w-1 lg:w-14 carousel-cell me-5'></div>
      {Object.values(Object.values(repositories).filter((item: any) => item.name !== GITHUB_USERNAME)).map((item: any) => {
        return (
          <div className='carousel-cell me-5 my-5' key={item.name}>
            <GithubCard name={item.name} language={item.language} stars={item.stargazers_count} description={item.description} link={item.html_url} updatedAt={item.updated_at} />
          </div>
        )
      })}
      <div className='w-1 lg:w-14 carousel-cell me-5'></div>
    </div>
  );
};

export default Carousel;
