pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('SonarCloud Analysis') {
            steps {
                withSonarQubeEnv('SonarLocal') {
                    sh """
                    sonar-scanner \
                      -D"sonar.projectKey=YunierLR_Mi-tesis" `
                      -D"sonar.organization=yunierlr" `
                      -D"sonar.sources="" `
                      -D"sonar.host.url=https://sonarcloud.io" `
                    """
                }
            }
        }
    }
}

