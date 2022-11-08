# Robots

## Data layer

- Robot object with:
  - name: string
  - image: string
  - id: string
  - stats:
    - speed: number
    - strength: number
    - createdAt: Date
- Robots array with:
  - Robot object

## Modified data

- loadRobots
- deleteRobot
- createRobot
- updateRobot

## App

### Show data

- a RobotCardList

## RobotCardList

### Show data

- a RobotCard for each robot

## RobotCard

### Show data

- the name of the robot
- the image of the robot
- the robot stats
- 2 buttons
  - delete button
  - modify button

## Button

### Show data

- the received text

### get actions

- the received action
