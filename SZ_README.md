# Spotted Zebra Frontend Take Home Assignment

## Prerequisites

`yarn`
`node 16.13.0 or higher`

## Setup

### Backend setup

Navigate to backend folder and run commands:

```bash
yarn install
yarn start
```

### Frontend setup

Navigate to frontend folder and run commands:

```bash
yarn install
yarn generate
yarn start
```

## Requirements

1. Implement getting soft skills data from api (use generated query from `/src/generated/graphql.tsx`).
2. Implement soft skills list (use Card component from `/src/components/atoms/Card`).
3. Implement logic for searching soft skills.
4. Adjust logic for searching soft skills so that will be debounced for one second.
