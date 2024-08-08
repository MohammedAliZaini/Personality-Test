import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Home from "../src/pages/Home";

describe('Home Component', () => {
  it('Should render the Introduction and BackgroundAudio components and skip button initially', () => {
    render(<Home />);

    expect(screen.getByTestId('introduction')).toBeInTheDocument();
    expect(screen.getByTestId('skip-button')).toBeInTheDocument();
    expect(screen.getByTestId('test-mute-button', { name: /VolumeOffIcon/i })).toBeInTheDocument();
  });

  it('Should start the yin-yang animation when the skip button is clicked', () => {
    render(<Home />);
    const skipButton = screen.getByRole('button', { name: /Skip Intro/i });
    fireEvent.click(skipButton);
    expect(screen.getByTestId("yin-yang-animation")).toBeInTheDocument();
  });

  it('Should render the begin button after skipping the intro', () => {
    render(<Home />);
    fireEvent.click(screen.getByRole('button', { name: /Skip Intro/i }));
    expect(screen.getByRole('button', { name: /Begin/i })).toBeInTheDocument();
  });

  it('Should not be able to allow more than 10 yes/no clicks after the test begins', () => {
    render(<Home/>)
    fireEvent.click(screen.getByRole('button', { name: /Skip Intro/i }));
    fireEvent.click(screen.getByRole('button', { name: /Begin/i }));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /No/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /No/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /No/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /No/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
  })

  it('Should show the Yang quote when enough Yang answers have been given', () => {
    render(<Home/>);
    fireEvent.click(screen.getByRole('button', { name: /Skip Intro/i }));
    fireEvent.click(screen.getByRole('button', { name: /Begin/i }));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /No/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /No/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /No/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /No/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    expect(screen.getByText("It does not matter how slowly you go as long as you do not stop.\" - Confucius")).toBeInTheDocument();
  })

  it('Should show the Yin quote when enough Yin answers have been given', () => {
    render(<Home/>);
    fireEvent.click(screen.getByRole('button', { name: /Skip Intro/i }));
    fireEvent.click(screen.getByRole('button', { name: /Begin/i }));
    fireEvent.click(screen.getByRole('button', {name: /No/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /No/}));
    fireEvent.click(screen.getByRole('button', {name: /No/}));
    fireEvent.click(screen.getByRole('button', {name: /No/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /No/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /No/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    expect(screen.getByText("Water is fluid, soft, and yielding. But water will wear away rock, which is rigid and cannot yield. As a rule, whatever is fluid, soft, and yielding will overcome whatever is rigid and hard. This is another paradox: what is soft is strong.\" ― Lao Tzu")).toBeInTheDocument();
  })

  it('Should render retake test button after quiz ends', () => {
    render(<Home />);
    fireEvent.click(screen.getByRole('button', { name: /Skip Intro/i }));
    fireEvent.click(screen.getByRole('button', { name: /Begin/i }));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /No/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /No/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /No/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /No/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    fireEvent.click(screen.getByRole('button', {name: /No/}));
    fireEvent.click(screen.getByRole('button', {name: /Yes/}));
    expect(screen.getByRole('button', { name: /Retake Test/i })).toBeInTheDocument();
  });
});