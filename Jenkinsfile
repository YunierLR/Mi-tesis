pipeline {
    agent any

    stages {
        stage('SonarCloud Analysis') {
            steps {
                withSonarQubeEnv('SonarLocal') {
                    bat """
                    sonar-scanner.bat ^
                      -Dsonar.projectKey=YunierLR_Mi-tesis ^
                      -Dsonar.organization=yunierlr ^
                      -Dsonar.sources=. ^
                      -Dsonar.host.url=https://sonarcloud.io ^
                      -Dsonar.login=%SONAR_TOKEN%
                    """
                }
            }
        }
    }
}


