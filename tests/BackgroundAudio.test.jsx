import React from 'react';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BackgroundAudio from '../src/components/BackgroundAudio';

describe('BackgroundAudio Component', () => {
  it('Should render a mute button', () => {
    render(<BackgroundAudio />);
    expect(screen.getByTestId('test-mute-button')).toBeInTheDocument();
  });

  it('Should have the correct state before being clicked', () => {
    render(<BackgroundAudio/>);
    const muteButton = screen.getByTestId('test-mute-button');
    expect(muteButton).toContainElement(screen.getByLabelText('VolumeOffIcon'));
  })

  it('Should toggle mute state when mute button is clicked', () => {
    render(<BackgroundAudio />);
    const muteButton = screen.getByTestId('test-mute-button');
    fireEvent.click(muteButton);
    expect(muteButton).toContainElement(screen.getByLabelText('VolumeMuteIcon'));
  });
});