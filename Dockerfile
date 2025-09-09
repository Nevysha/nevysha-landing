FROM nginx:alpine
LABEL authors="Nevysha"

# Copy the static content from the 'build' directory to the Nginx server directory
COPY ./build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
ENTRYPOINT ["top", "-b"]