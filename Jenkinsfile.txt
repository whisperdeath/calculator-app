pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Start Application') {
            steps {
                bat 'npm start'
            }
        }

    }
}