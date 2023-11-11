pipeline {
    agent any
    environment {
        // Existing environment variables
        PORT = '8000'
        SALT = '12'
        BUCKET_NAME = 'gymaniac'
        BUCKET_REGION = 'us-east-1'
        MONGO_CONNECTION_URL = credentials('MONGO_CONNECTION_URL')
        JWT_ACCESS_TOKEN_SECRET = credentials('JWT_ACCESS_TOKEN_SECRET')
        JWT_REFRESH_TOKEN_SECRET = credentials('JWT_REFRESH_TOKEN_SECRET')
        ACCESS_KEY = credentials('aws-access-key')
        SECRET_ACCESS_KEY = credentials('aws-secret-access-key')
        // DockerHub Credentials
        DOCKERHUB_CREDENTIALS = credentials('Dockerhub')
        SERVER_IMAGE_NAME = 'yashurade20/gymserver'
        CLIENT_IMAGE_NAME = 'yashurade20/gymclient'
        IMAGE_TAG = 'latest' // Or use a dynamic tag, like "${BUILD_NUMBER}"
    }
    stages {
        stage('Setup') {
            steps {
                script {
                    // Existing setup steps
                   	  writeFile file: 'server/.env', text: """
                    PORT=${PORT}
                    MONGO_CONNECTION_URL=${MONGO_CONNECTION_URL}
                    JWT_ACCESS_TOKEN_SECRET=${JWT_ACCESS_TOKEN_SECRET}
                    JWT_REFRESH_TOKEN_SECRET=${JWT_REFRESH_TOKEN_SECRET}
                    SALT=${SALT}
                    BUCKET_NAME=${BUCKET_NAME}
                    BUCKET_REGION=${BUCKET_REGION}
                    ACCESS_KEY=${ACCESS_KEY}
                    SECRET_ACCESS_KEY=${SECRET_ACCESS_KEY}
                    """
                }
            }
        }
        stage('Build and Push Server Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', DOCKERHUB_CREDENTIALS) {
                        def serverApp = docker.build(SERVER_IMAGE_NAME + ':' + IMAGE_TAG, '-f server/Dockerfile ./server')
                        serverApp.push()
                    }
                }
            }
        }
        stage('Build and Push Client Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', DOCKERHUB_CREDENTIALS) {
                        def clientApp = docker.build(CLIENT_IMAGE_NAME + ':' + IMAGE_TAG, '-f client/Dockerfile ./client')
                        clientApp.push()
                    }
                }
            }
        }
        // Additional stages like Test, Deploy
    }
    post {
        always {
            // Cleanup steps, if necessary
            echo "This will always run regardless of build result"
        }
    }
}
