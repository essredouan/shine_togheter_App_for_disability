import { useState, useEffect } from 'react';
import './Sports.css';

export default function Sports() {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    // بيانات جاهزة - أنشطة رياضية خاصة بالمعاقين
    const predefinedSports = [
      {
        title: '♿ Football for Amputees',
        description: 'Adapted football for individuals with leg amputations.',
      },
      {
        title: '🏀 Wheelchair Basketball',
        description: 'Basketball designed for players using wheelchairs.',
      },
      {
        title: '🎯 Boccia',
        description: 'Precision ball sport similar to bocce, played by people with severe physical disabilities.',
      },
      {
        title: '🏊‍♂️ Adaptive Swimming',
        description: 'Swimming sessions with support and custom techniques.',
      },
      {
        title: '🚴 Handcycling',
        description: 'Cycling using hand-powered bikes for upper-body strength.',
      },
      {
        title: '🧘‍♂️ Seated Yoga',
        description: 'Relaxing yoga designed for wheelchair users or limited mobility.',
      }
    ];
    setSports(predefinedSports);
  }, []);

  return (
    <div className="sports-container">
      <h2>🏅 Inclusive Sports for All</h2>

      <div className="sports-list">
        {sports.map((sport, index) => (
          <div key={index} className="sport-card">
            <h3>{sport.title}</h3>
            <p>{sport.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
