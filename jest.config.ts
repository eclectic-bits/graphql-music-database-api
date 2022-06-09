import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    'collectCoverageFrom': [ '<rootDir>/src/**/*.{js,jsx,ts,tsx}' ],
    'coverageThreshold': {
        'global': {
            'branches': 80,
            'functions': 80,
            'lines': 80,
            'statements': -10
        }
    },
    'preset': 'ts-jest',
    'roots': [
        '<rootDir>/src',
        '<rootDir>/tests'
    ],
    'testEnvironment': 'node',
    'verbose': false
};

export default config;