pipeline {
    agent any
//Esto es una prueba
    stages {
        stage('SonarCloud Analysis') {
            steps {
                withSonarQubeEnv('SonarLocal') {
                    bat """
                    D:\\Tesis 2\\Herramientas\\sonar-scanner-7.0.2.4839-windows-x64\\bin\\sonar-scanner.bat ^
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


