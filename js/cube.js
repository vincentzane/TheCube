

				var meshMaterial = new THREE.MeshBasicMaterial({vertexColors: THREE.VertexColors});

				var geom = new THREE.Geometry(); 
				var v1 = new THREE.Vector3(-length,-length,-length);
				var v2 = new THREE.Vector3(length,-length,-length);
				var v3 = new THREE.Vector3(length,length,-length);
				var v4 = new THREE.Vector3(-length,length,-length);
				var v5 = new THREE.Vector3(-length,-length,length);
				var v6 = new THREE.Vector3(length,-length,length);
				var v7 = new THREE.Vector3(length,length,length);
				var v8 = new THREE.Vector3(-length,length,length);

				// push vertices for cube
				geom.vertices.push(v1);
				geom.vertices.push(v2);
				geom.vertices.push(v3);
				geom.vertices.push(v4);
				geom.vertices.push(v5);
				geom.vertices.push(v6);
				geom.vertices.push(v7);
				geom.vertices.push(v8);

				// all six faces
				var face;
				
				face = new THREE.Face3(0,2,1);
				face.vertexColors[0] = new THREE.Color("0x000000");
				face.vertexColors[1] = new THREE.Color(0x000000); 
				face.vertexColors[2] = new THREE.Color(0x000000); 
				geom.faces.push(face);

				
				face = new THREE.Face3(0,3,2);
				face.vertexColors[0] = new THREE.Color(0x000000);
				face.vertexColors[1] = new THREE.Color(0x000000); 
				face.vertexColors[2] = new THREE.Color(0x000000); 
				geom.faces.push(face);

				// face 2

				face = new THREE.Face3(2,7,6);
				face.vertexColors[0] = new THREE.Color(0x000000);
				face.vertexColors[1] = new THREE.Color(0x4b4a48); 
				face.vertexColors[2] = new THREE.Color(0x4b4a48); 
				geom.faces.push(face);
					
				face = new THREE.Face3(2,3,7);
				face.vertexColors[0] = new THREE.Color(0x000000);
				face.vertexColors[1] = new THREE.Color(0x000000); 
				face.vertexColors[2] = new THREE.Color(0x4b4a48); 
				geom.faces.push(face);
				
				// face3
				
		
				face = new THREE.Face3(0,7,3);
				face.vertexColors[0] = new THREE.Color(0x000000);
				face.vertexColors[1] = new THREE.Color(0x4b4a48); 
				face.vertexColors[2] = new THREE.Color(0x000000); 
				geom.faces.push(face);
				
				face = new THREE.Face3(0,4,7);
				face.vertexColors[0] = new THREE.Color(0x000000);
				face.vertexColors[1] = new THREE.Color(0x4b4a48); 
				face.vertexColors[2] = new THREE.Color(0x4b4a48); 
				geom.faces.push(face);
				
				
				///// face 4

				face = new THREE.Face3(1,6,5);
				face.vertexColors[0] = new THREE.Color(0x000000);
				face.vertexColors[1] = new THREE.Color(0x4b4a48); 
				face.vertexColors[2] = new THREE.Color(0x4b4a48); 
				geom.faces.push(face);
				

				face = new THREE.Face3(1,2,6);
				face.vertexColors[0] = new THREE.Color(0x000000);
				face.vertexColors[1] = new THREE.Color(0x000000); 
				face.vertexColors[2] = new THREE.Color(0x4b4a48); 
				geom.faces.push(face);
				
				///// face 5
				
				face = new THREE.Face3(4,6,7);
				face.vertexColors[0] = new THREE.Color(0x4b4a48);
				face.vertexColors[1] = new THREE.Color(0x4b4a48); 
				face.vertexColors[2] = new THREE.Color(0x4b4a48); 
				geom.faces.push(face);
				
				face = new THREE.Face3(4,5,6);
				face.vertexColors[0] = new THREE.Color(0x4b4a48);
				face.vertexColors[1] = new THREE.Color(0x4b4a48); 
				face.vertexColors[2] = new THREE.Color(0x4b4a48); 
				geom.faces.push(face);
				
				/// face 6
				
				face = new THREE.Face3(0,5,4);
				face.vertexColors[0] = new THREE.Color(0x000000);
				face.vertexColors[1] = new THREE.Color(0x4b4a48); 
				face.vertexColors[2] = new THREE.Color(0x4b4a48); 
				geom.faces.push(face);
				

				face = new THREE.Face3(0,1,5);
				face.vertexColors[0] = new THREE.Color(0x000000);
				face.vertexColors[1] = new THREE.Color(0x000000); 
				face.vertexColors[2] = new THREE.Color(0x4b4a48); 
				geom.faces.push(face);

				
				
				geom.computeFaceNormals();
				geom.computeVertexNormals();

				var object = new THREE.Mesh( geom,meshMaterial);
				object.doubleSided = true;
				