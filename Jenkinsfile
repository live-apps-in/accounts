pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t live-accounts .'
            }
        }
        stage('Stop old container') {
            steps {
                sh 'docker rm live-accounts --force'
            }
        }
        stage('Start New Container') {
            steps {
                sh 'docker run -p 3005:3000 -d --name live-accounts live-accounts'
            }
        }
    }
}