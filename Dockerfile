# 로컬 버전과 일치
FROM node:18.12.1

# 명령어를 실행할 워크 디렉토리 생성
RUN mkdir -p /app
WORKDIR /app
# 프로젝트 전체를 워크 디렉토리에 추가
ADD . /app/

# 프로젝트에 사용되는 의존성 설치
RUN npm install

# nest.js 빌드
RUN npm run build

# 포트 개방
EXPOSE 3000

# nest.js 실행
ENTRYPOINT npm run start